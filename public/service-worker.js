self.addEventListener("push", function(e) {

    const body = e.data?.text() ?? "";

    e.waitUntil(
        self.registration.showNotification("Habits", {
            body,
        })
    )
})