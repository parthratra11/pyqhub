"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { Calendar } from "@/components/Calendar"; // You'll need to create this component
import { FaEdit, FaPuzzlePiece, FaCode, FaUserTie } from "react-icons/fa";

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
    recentActivity: [
      {
        type: "oa",
        title: "Amazon OA - SDE-2",
        date: "2024-05-30",
        score: "95/100",
        icon: <FaCode />,
      },
      {
        type: "mock",
        title: "System Design Mock Interview",
        date: "2024-05-28",
        feedback: "Excellent communication",
        icon: <FaUserTie />,
      },
      {
        type: "practice",
        title: "Dynamic Programming Set",
        date: "2024-05-27",
        solved: 15,
        icon: <FaPuzzlePiece />,
      },
    ],
    skills: [
      { name: "DSA", level: 85, projects: 12, endorsements: 24 },
      { name: "System Design", level: 70, projects: 5, endorsements: 15 },
      { name: "Full Stack", level: 90, projects: 8, endorsements: 31 },
      { name: "Cloud & DevOps", level: 65, projects: 3, endorsements: 8 },
    ],
  };

  const renderHeader = () => (
    <div className="max-w-6xl mx-auto bg-[#161622] rounded-lg p-6 mb-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-4xl">{userData.name[0]}</span>
          </div>
          <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full hover:bg-blue-600">
            <FaEdit className="text-white" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold group">
                {userData.name}
                <FaEdit className="inline-block ml-2 opacity-0 group-hover:opacity-100 cursor-pointer text-blue-500" />
              </h1>
              <p className="text-gray-400 group">
                {userData.email}
                <FaEdit className="inline-block ml-2 opacity-0 group-hover:opacity-100 cursor-pointer text-blue-500" />
              </p>
            </div>
            <div className="flex gap-4">
              {Object.entries(userData.socialLinks).map(([platform, link]) => (
                <a
                  key={platform}
                  href={`https://${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500 transition-colors"
                >
                  {platform === "github" && <FaGithub />}
                  {platform === "linkedin" && <FaLinkedin />}
                  {platform === "twitter" && <FaTwitter />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const generateContributionData = () => {
    const today = new Date();
    const data = [];
    for (let i = 365; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 8), // Random contribution count 0-7
      });
    }
    return data;
  };

  const getContributionColor = (count) => {
    if (count === 0) return "bg-[#161622]";
    if (count <= 2) return "bg-[#0e4429]";
    if (count <= 4) return "bg-[#006d32]";
    if (count <= 6) return "bg-[#26a641]";
    return "bg-[#39d353]";
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1f1f2f] p-4 rounded">
          <p className="text-gray-400">Total Points</p>
          <p className="text-2xl font-bold text-blue-500">{userData.points}</p>
        </div>
        <div className="bg-[#1f1f2f] p-4 rounded">
          <p className="text-gray-400">Global Rank</p>
          <p className="text-2xl font-bold text-purple-500">#{userData.rank}</p>
        </div>
        <div className="bg-[#1f1f2f] p-4 rounded">
          <p className="text-gray-400">Problems Solved</p>
          <p className="text-2xl font-bold text-green-500">
            {userData.problemsSolved}
          </p>
        </div>
      </div>

      {/* Contribution Calendar */}
      <ContributionCalendar />

      {/* Recent Activity */}
      {renderRecentActivity()}
    </div>
  );

  const ContributionCalendar = () => {
    const contributionData = generateContributionData();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const renderDays = () => {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const day = ["", "Mon", "", "Wed", "", "Fri", ""][i];
        days.push(
          <div key={i} className="text-xs text-gray-400 h-[10px]">
            {day}
          </div>
        );
      }
      return days;
    };

    const renderCells = () => {
      const weeks = [];
      for (let i = 0; i < 53; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          const dataIndex = i * 7 + j;
          if (dataIndex < contributionData.length) {
            const data = contributionData[dataIndex];
            week.push(
              <div
                key={j}
                className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(
                  data.count
                )} hover:ring-2 hover:ring-gray-400`}
                title={`${data.count} contributions on ${data.date}`}
              />
            );
          }
        }
        weeks.push(
          <div key={i} className="flex flex-col gap-1">
            {week}
          </div>
        );
      }
      return weeks;
    };

    const renderMonths = () => {
      const today = new Date();
      const monthLabels = [];
      for (let i = 11; i >= 0; i--) {
        const date = new Date(today);
        date.setMonth(date.getMonth() - i);
        monthLabels.push(
          <div key={i} className="text-xs text-gray-400">
            {months[date.getMonth()]}
          </div>
        );
      }
      return monthLabels;
    };

    return (
      <div className="bg-[#161622] rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">{renderDays()}</div>
          <div>
            <div className="flex gap-2 mb-2">{renderMonths()}</div>
            <div className="flex gap-[2px]">{renderCells()}</div>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 2, 4, 6, 8].map((count) => (
                  <div
                    key={count}
                    className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(
                      count
                    )}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProgress = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Skills & Expertise</h2>
      <div className="grid grid-cols-2 gap-6">
        {userData.skills.map((skill) => (
          <div key={skill.name} className="bg-[#1f1f2f] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{skill.name}</h3>
              <span className="text-blue-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-[#0a0a12] rounded-full h-2 mb-4">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, #3B82F6 ${skill.level}%, #6366F1)`,
                }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{skill.projects} projects</span>
              <span>{skill.endorsements} endorsements</span>
            </div>
          </div>
        ))}
      </div>
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

  const renderRecentActivity = () => (
    <div className="space-y-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="grid gap-4">
        {userData.recentActivity.map((activity, index) => (
          <div
            key={index}
            className="bg-[#1f1f2f] p-4 rounded-lg flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-[#2a2a3a] flex items-center justify-center text-blue-500">
              {activity.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-gray-400">{activity.date}</p>
            </div>
            <div className="text-right">
              {activity.score && (
                <p className="text-green-500">{activity.score}</p>
              )}
              {activity.feedback && (
                <p className="text-blue-500">{activity.feedback}</p>
              )}
              {activity.solved && (
                <p className="text-purple-500">{activity.solved} solved</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#0a0a12] text-white pt-20 p-6">
        {renderHeader()}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-6">
            {["overview", "progress", "activity", "rewards"].map((tab) => (
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
            {activeTab === "activity" && renderRecentActivity()}
            {activeTab === "rewards" && renderRewards()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
