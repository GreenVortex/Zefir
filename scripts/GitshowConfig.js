GitHubCalendar(".calendar", "greenvortex");

    // Enabling responsive functionality
    GitHubCalendar(".calendar", "greenvortex", { responsive: true });

    // Enabling Proxy
    GitHubCalendar(".calendar", "greenvortex", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())