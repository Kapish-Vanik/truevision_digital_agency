import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type ContactInquiry = {
    name : Text;
    email : Text;
    message : Text;
    phone : ?Text;
    timestamp : Time.Time;
  };

  let inquiries = List.empty<ContactInquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text, phone : ?Text) : async () {
    let inquiry : ContactInquiry = {
      name = name;
      email = email;
      message = message;
      phone = phone;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiries() : async [ContactInquiry] {
    inquiries.toArray();
  };
};
