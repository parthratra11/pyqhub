"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userData = {
    name: "Priya Patel",
    email: "priya.patel@iitkgp.ac.in",
    address: "742, Koramangala 6th Block, Bangalore, Karnataka",
    phone: "+91 98765 43210",
    points: 3500,
    rank: 78,
    problemsSolved: 345,
    badges: ["Algorithm Master", "Daily Streak 100", "Top Contributor"],
    progress: {
      dsa: 85,
      os: 70,
      dbms: 90,
      cn: 65,
      system_design: 55,
      aptitude: 95,
    },
    socialLinks: {
      github: "github.com/priyapatel",
      linkedin: "linkedin.com/in/priyapatel",
      twitter: "@priyacodes",
    },
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Address</p>
              <p>{userData.address}</p>
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <p>{userData.phone}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Email</p>
              <p>{userData.email}</p>
            </div>
            <div>
              <p className="text-gray-400">Social Links</p>
              <div className="flex gap-4">
                <a
                  href={`https://${userData.socialLinks.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl cursor-pointer hover:text-blue-500" />
                </a>
                <a
                  href={`https://${userData.socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500" />
                </a>
                <a
                  href={`https://twitter.com/${userData.socialLinks.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#1f1f2f] p-4 rounded">
            <p className="text-gray-400">Total Points</p>
            <p className="text-2xl font-bold text-blue-500">
              {userData.points}
            </p>
          </div>
          <div className="bg-[#1f1f2f] p-4 rounded">
            <p className="text-gray-400">Global Rank</p>
            <p className="text-2xl font-bold text-purple-500">
              #{userData.rank}
            </p>
          </div>
          <div className="bg-[#1f1f2f] p-4 rounded">
            <p className="text-gray-400">Problems Solved</p>
            <p className="text-2xl font-bold text-green-500">
              {userData.problemsSolved}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProgress = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
      {Object.entries(userData.progress).map(([subject, progress]) => (
        <div key={subject} className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">
              {subject.toUpperCase().replace("_", " ")}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-[#0a0a12] rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Badges & Achievements</h2>
      <div className="grid grid-cols-3 gap-4">
        {userData.badges.map((badge, index) => (
          <div
            key={index}
            className="bg-[#1f1f2f] p-4 rounded text-center hover:bg-[#2a2a3a] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-3 flex items-center justify-center">
              🏆
            </div>
            <p className="font-medium">{badge}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#0a0a12] text-white p-6">
        <div className="max-w-6xl mx-auto bg-[#161622] rounded-lg p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-4xl">{userData.name[0]}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-gray-400">{userData.email}</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-6">
            {["overview", "progress", "rewards"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-[#161622] text-gray-400 hover:bg-[#1f1f2f]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-[#161622] rounded-lg p-6">
            {activeTab === "overview" && renderOverview()}
            {activeTab === "progress" && renderProgress()}
            {activeTab === "rewards" && renderRewards()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
