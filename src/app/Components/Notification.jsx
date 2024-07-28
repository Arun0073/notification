"use client";
import React, { useCallback, useEffect } from "react";
import "./Notification.css";
import bell from "@/app/assets/Notification.png";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import addNotification from "react-push-notification";
import { Notifications } from "react-push-notification";

const Notification = () => {
  const sendNotification = () => {
    addNotification({
      title: "Success",
      subtitle: "You have successfully submitted",
      message: "Notification Sent",
      theme: "light",
      closeButton: "close",
      backgroundTop: "green",
      backgroundBottom: "yellowgreen",
    });
    toast.success("Notification Sent!!");
  };

  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      window.Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Notification Permission granted!!");
          sendNotification();
        } else {
          console.log("Notification Permission denied.");
        }
      });
    } else {
      console.log("Notification API not supported in this browser.");
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission]);
  return (
    <div className="main">
      <Toaster position="top-right" richColors expand={true} />
      <Notifications position="top-middle" />
      <p className="heading">Hola!</p>
      <div className="circle-main">
        <div className="circle-1">
          <div className="circle-2">
            <div className="circle-3">
              <div className="circle-4">
                <Image
                  priority={true}
                  src={bell}
                  alt="Bell Image"
                  width={190}
                  height={210}
                />
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
