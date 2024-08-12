// Import necessary dependencies
import pageTitle from "@/common/utils/page-title";
import { ContactCard, NewCaseForm } from "@/components/new-case";
import { Metadata } from "next";
import PageHeading from "@/components/pageHeading";
import { CallIconNewCase, LocationIconNewCase, MailIconNewCase } from "@/components/icons";

// Define metadata
export const metadata: Metadata = pageTitle.newCase;

// Define the type for Contact Details
interface ContactDetail {
  icon: JSX.Element;
  title: string;
  textOne: string;
  href: string;
}

// Define NewCasePage component
const NewCasePage: React.FC = () => {
  // Pass an empty array instead of the original contactDetails
  const contactDetails: ContactDetail[] = [];

  return (
    <section>
      {/* Page Heading */}
      <PageHeading className="text-start">New Case</PageHeading>

      {/* Page Content */}
      <div className="max-w-[1440px] mx-auto">
        <div className="px-4 py-6 md:px-[50px] lg:px-[100px] md:pt-[60px] md:pb-[80px] ">
          <p className="animate__fadeInUp animate__animated animate__delay-500ms">
            Fill out some info and we will be in touch shortly! We can't wait to hear from you!
          </p>
        </div>

        {/* New Case Form */}
        <NewCaseForm />

        {/* Contact Details */}
        <div className="px-4 md:px-[50px] lg:px-[100px] my-[40px] md:my-[80px]">
          <h2 className="text-[32px] md:text-[46px] font-bold mb-[30px] md:mb-[60px]" data-aos="fade-up">
            Contact Details
          </h2>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-[10px] md:gap-[20px] md:justify-between">
            {contactDetails.length > 0 ? (
              contactDetails.map((contact, index) => (
                <ContactCard
                  key={contact.title}
                  card={contact}
                  className="max-w-full"
                  dataAos="zoom-in"
                  dataAosDelay={150 * index}
                  href={contact.href}
                />
              ))
            ) : (
              <p>No contact details available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCasePage;
