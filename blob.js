chatClient.on("USERNOTICE", msg => {
  switch (true){
    case msg.isSub():
      console.log(
        msg.displayName +
        " just subscribed to " +
        msg.channelName +
        " with a tier " +
        msg.eventParams.subPlan +
        " (" +
        msg.eventParams.subPlanName +
        ") sub for the first time!"
      );
      if (msg.messageText != null) {
        console.log(
          msg.displayName +
          " shared the following message with the streamer: " +
          msg.messageText
        );
      } else {
        console.log("They did not share a message with the streamer.");
      }
      break
    case msg.isResub:
      let streakMessage = "";
      if (msg.eventParams.shouldShareStreak) {
        streakMessage =
          ", currently " + msg.eventParams.streakMonths + " months in a row";
      }
      console.log(
        msg.displayName +
        " just resubscribed to " +
        msg.channelName +
        " with a tier " +
        msg.eventParams.subPlan +
        " (" +
        msg.eventParams.subPlanName +
        ") sub! They are resubscribing for " +
        msg.eventParams.cumulativeMonths +
        " months" +
        streakMessage +
        "!"
      );
      if (msg.messageText != null) {
        console.log(
          msg.displayName +
          " shared the following message with the streamer: " +
          msg.messageText
        );
      } else {
        console.log("They did not share a message with the streamer.");
      }
      break
    case msg.isRaid():
      console.log(
        msg.displayName +
        " just raided " +
        msg.channelName +
        " with " +
        msg.eventParams.viewerCount +
        " viewers!"
      );
      break
    case isSubgift():
      if (msg.eventParams.months === 1) {
        console.log(
          msg.displayName +
          " just gifted " +
          msg.eventParams.recipientDisplayName +
          " a fresh tier " +
          msg.eventParams.subPlan +
          " (" +
          msg.eventParams +
          ") sub to " +
          msg.channelName +
          "!"
        );
      } else {
        console.log(
          msg.displayName +
          " just gifted " +
          msg.eventParams.recipientDisplayName +
          " a tier " +
          msg.eventParams.subPlan +
          " (" +
          msg.eventParams +
          ") resub to " +
          msg.channelName +
          ", that's " +
          msg.eventParams.months +
          " in a row!"
        );
      }
      // note: if the subgift was from an anonymous user, the sender user for the USERNOTICE message will be
      // AnAnonymousGifter (user ID 274598607)
      if (msg.senderUserID === "274598607") {
        console.log("That (re)sub was gifted anonymously!");
      }
      break
    case isAnonSubgift():
      if (msg.eventParams.months === 1) {
        console.log(
          "An anonymous gifter just gifted " +
          msg.eventParams.recipientDisplayName +
          " a fresh tier " +
          msg.eventParams.subPlan +
          " (" +
          msg.eventParams +
          ") sub to " +
          msg.channelName +
          "!"
        );
      } else {
        console.log(
          "An anonymous gifter just gifted " +
          msg.eventParams.recipientDisplayName +
          " a tier " +
          msg.eventParams.subPlan +
          " (" +
          msg.eventParams +
          ") resub to " +
          msg.channelName +
          ", that's " +
          msg.eventParams.months +
          " in a row!"
        );
      }
      break
    case isAnonGiftPaidUpgrade():
      console.log(
        msg.displayName +
        " is continuing their " +
        msg.channelName +
        " gift sub they got from an anonymous user!"
      );
      break
    case isGiftPaidUpgrade():
      console.log(
        msg.displayName +
        " is continuing their " +
        msg.channelName +
        " gift sub they got from " +
        msg.msgParam.senderName +
        "!"
      );
      break
    case isRitual():
      if (msg.eventParams.ritualName === "new_chatter") {
        console.log(
          msg.displayName + " is new to " + msg.channelName + "'s chat! Say hello!"
        );
      } else {
        console.warn(
          "Unknown (unhandled) ritual type: " + msg.eventParams.ritualName
        );
      }
      break
    case isBitsBadgeTier():
      console.log(
        msg.displayName +
        " just earned themselves the " +
        msg.threshold +
        " bits badge in " +
        msg.channelName +
        "'s channel!"
      );
      break
    default:
      console.error('Unhandled notice!')
  }
}