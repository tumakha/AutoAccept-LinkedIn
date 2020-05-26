
function sendMoreInvitations(hasMoreInvitations) {
  chrome.runtime.sendMessage({moreInvitations: hasMoreInvitations}, function() {
  });
}

if (document.querySelector("[class='mn-invitation-manager__no-invites']")) {
  sendMoreInvitations(false);
  document.querySelector("[class='mn-invitation-manager__no-invite-text']").style.color = "red";
} else {
  document.getElementById("contact-select-checkbox").click();

  setTimeout(function() {
    document.querySelector("[data-control-name='accept_all']").click();
    sendMoreInvitations(true);
  }, 2000);
}










