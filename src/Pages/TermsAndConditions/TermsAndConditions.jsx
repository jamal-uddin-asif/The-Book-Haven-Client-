import React from "react";
import { useNavigate } from "react-router";
import MyContainer from "../../Components/MyContainer/MyContainer";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <MyContainer>

      
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-1">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Welcome Box */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 mb-6">
          <h2 className="font-semibold text-indigo-700 text-lg mb-1">
            Welcome to Book Haven 📚
          </h2>
          <p className="text-gray-700 text-sm">
            Please read these terms carefully before using our platform.
            By accessing Book Haven, you agree to comply with the following
            terms and conditions.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-2">

          <div>
            <h3 className="font-semibold text-indigo-600 mb-1">
              1. Account Registration
            </h3>
            <p>
              To access certain features of Book Haven, you may need to create
              an account. You are responsible for providing accurate
              information and keeping your login credentials secure.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-indigo-600 mb-1">
              2. Use of the Platform
            </h3>
            <p>
              Book Haven is intended for discovering, managing, and sharing
              books. You agree not to misuse the platform, upload harmful
              content, or attempt unauthorized access.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-indigo-600 mb-1">
              3. User Content
            </h3>
            <p>
              Any content you add (books, reviews, summaries) must be respectful
              and lawful. You retain ownership of your content, but grant Book
              Haven permission to display it within the platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-indigo-600 mb-1">
              4. Privacy
            </h3>
            <p>
              We respect your privacy. Your personal data will only be used to
              improve your experience on Book Haven and will not be shared
              without consent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-indigo-600 mb-1">
              5. Changes to Terms
            </h3>
            <p>
              Book Haven reserves the right to update these terms at any time.
              Continued use of the platform means you accept any changes.
            </p>
          </div>

        </div>

        {/* Footer Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Back
          </button>
        </div>
      </div>
      </MyContainer>
    </div>
  );
};

export default TermsAndConditions;
