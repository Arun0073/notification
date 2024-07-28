"use client";
import React, { useCallback, useEffect } from "react";
import "./Notification.css";
import bell from "@/app/assets/Notification.png";
import Image from "next/image";

const Notification = () => {
  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Hello Developers", {
        body: "This is Notification Message!!",
        icon: "/src/app/assets/Notification.png",
      });
    }
  };

  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      window.Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Notification Permission granted!!");
          sendNotification();
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission]);
  return (
    <div className="main">
      <p className="heading">Hola!</p>
      <div className="circle-main">
        <div className="circle-1">
          <div className="circle-2">
            <div className="circle-3">
              <div className="circle-4">
                <Image priority={true} src={bell} alt="Bell Image" width={190} height={210} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notification">
        <h1>Lorem Ipsum...</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button onClick={sendNotification}>Send Notification</button>
      </div>
    </div>
  );
};

export default Notification;
