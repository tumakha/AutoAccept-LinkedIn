
function sendMoreInvitations(hasMoreInvitations) {
  chrome.runtime.sendMessage({moreInvitations: hasMoreInvitations}, function() {
  });
}

if (document.querySelector(".mn-invitation-manager__no-invites")) {
  sendMoreInvitations(false);
  document.querySelector(".mn-invitation-manager__no-invite-text").style.color = "red";
} else {
  var buttons = document.querySelectorAll(".invitation-card__action-btn.artdeco-button--secondary")
  buttons.forEach(btn => btn.click());

  setTimeout(function() {
    sendMoreInvitations(true);
  }, 2000);
}










