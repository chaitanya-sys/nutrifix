import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import guidanceImg from "../assets/guidance.png";
import workoutImg from "../assets/workout.png";
import assistantImg from "../assets/assistant.png";
import healthyfoodImg from "../assets/healthy-food.png";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-left">
          <h1>Nutrifix</h1>
          <p>Your personalized path to better nutrition and fittness 🍎</p>
          <Link to="/signup" className="hero-btn">Get Started</Link>
        </div>
        <div className="hero-right">
          <img src={healthyfoodImg} alt="Healthy Food" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <img src={guidanceImg} alt="Guidance" className="image-size" />
          <h3>Personalized Guidance On The Go</h3>
          <p>
            Harness the power of data-driven health: AI Ria anticipates your
            needs, offering insights and notifications to steer your daily
            choices towards a healthier future.
          </p>
        </div>

        <div className="feature">
          <img src={workoutImg} alt="Workout Plan" className="image-size" />
          <h3>Personalized Diet & Workout Suggestions</h3>
          <p>
            No crash diets, only balanced nutrition. Customized diet and workout
            plan as per your need anytime with AI Coach Ria.
          </p>
        </div>

        <div className="feature">
          <img src={assistantImg} alt="Assistant" className="image-size" />
          <h3>Anytime, Anywhere Personalized Assistance</h3>
          <p>
            Unlock personalized insights tailored based on your health data with
            AI Coach Ria, anytime and anywhere.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
