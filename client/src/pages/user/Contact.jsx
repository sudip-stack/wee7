// import Footers from "../../components/Footer"


// function Contact() {
//   return (
//     <>
//     <div>Contact
//     </div>
//     <Footers/>
//     </>
    
//   )
// }

// export default Contact
// // this is our contact page


import Footers from "../../components/Footer"

function Contact() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-blue-200">
          <h1 className="text-4xl font-bold text-blue-700 mb-4 border-b pb-2 border-blue-300">Contact Us</h1>
          <p className="text-gray-700 text-lg mb-8">
            Thank you for choosing <span className="font-semibold text-blue-800">FastRide Rentals</span>! We’re here to help. Contact us through any of the following methods:
          </p>

          <div className="space-y-6">
            {/* Office Info */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">Head Office</h2>
              <p className="text-gray-600">Rent a Ride Pvt. Ltd.</p>
              <p className="text-gray-600">123 Main Street, Kathmandu 44600, Nepal</p>
            </div>

            {/* Support Info */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-green-600 mb-2">Customer Support</h2>
              <p className="text-gray-600">Phone: +977-1-5555555</p>
              <p className="text-gray-600">Email: support@rentaride.com</p>
              <p className="text-gray-600">Support Hours: 9:00 AM – 6:00 PM (Sunday - Friday)</p>
            </div>

            {/* Social Links */}
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-yellow-700 mb-2">Follow Us</h2>
              <p className="text-gray-600">
                Facebook:{" "}
                <a
                  href="https://facebook.com/rentaride"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  /rentaride
                </a>
              </p>
              <p className="text-gray-600">
                Instagram:{" "}
                <a
                  href="https://instagram.com/rentaride"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-500 underline"
                >
                  @rentaride
                </a>
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition">
              <p className="text-red-700 font-medium">
                🚨 For urgent rental issues, call our 24/7 emergency line: +977-9800000000
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default Contact
