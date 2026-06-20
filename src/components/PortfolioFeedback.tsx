"use client";

import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

export default function PortfolioFeedback() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("portfolioFeedbackShown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const submitFeedback = async () => {
    if (!name || rating === 0) {
      alert("Please enter your name and rating.");
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwpKN9JEG6-2zsKoMrr9uyzAKvWQDp_T8751V44W9-xl_C27ag5URzPk4KzYiiZpQzy/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            rating,
            feedback,
          }),
        }
      );
await fetch(
  "/api/feedback-notify",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json"
    },
    body: JSON.stringify({
      name,
      rating,
      feedback
    })
  }
);
      setSubmitted(true);

      localStorage.setItem(
        "portfolioFeedbackShown",
        "true"
      );

      // ntfy notification
      fetch("/api/notify", {
        method: "POST",
      });

      setTimeout(() => {
        setShow(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback");
    }

    setLoading(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
      <div className="bg-[#111827] border border-cyan-500/30 rounded-2xl p-6 w-full max-w-md shadow-2xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">
            ⭐ Rate My Portfolio
          </h2>

          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {!submitted ? (
          <>
            <p className="text-gray-300 text-sm mb-4">
              Your feedback helps me improve my portfolio.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full p-3 rounded-lg bg-[#1f2937] text-white outline-none border border-gray-700 mb-4"
            />

            <div className="mb-4">
              <p className="mb-2 text-white">
                Rating
              </p>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={30}
                    className="cursor-pointer transition"
                    fill={
                      star <= rating
                        ? "#facc15"
                        : "none"
                    }
                    color={
                      star <= rating
                        ? "#facc15"
                        : "#9ca3af"
                    }
                    onClick={() =>
                      setRating(star)
                    }
                  />
                ))}
              </div>
            </div>

            <textarea
              rows={4}
              placeholder="Share your feedback..."
              value={feedback}
              onChange={(e) =>
                setFeedback(e.target.value)
              }
              className="w-full p-3 rounded-lg bg-[#1f2937] text-white outline-none border border-gray-700"
            />

            <button
              onClick={submitFeedback}
              disabled={loading}
              className="mt-5 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg transition"
            >
              {loading
                ? "Submitting..."
                : "Submit Feedback"}
            </button>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              🎉 Thank You!
            </h3>

            <p className="text-gray-300">
              Your feedback has been submitted successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}