This is a companion app for La Mesa String School guitar students. It includes the following features:

-Scheduling lessons (cancellations, make-ups, changing spots, and new student signup) via Google calendar
-Tracking payments made via Venmo and Paypal. Cash/check can be tracked manually by both student and teacher
-Access to resources: sheet music library stored in Google drive, quizzes via Google classroom & more
-Weekly practice logging, and optional reminders to practice on a schedule set by the user
-Progress tracking via a visual list of checkpoints set up in the app and teacher's score for fluency in each one

Currently (7/22/23) the app is in a skeleton form with only authentication features handled so far. The back end is set up via supabase, but with an ongoing issue pertaining to their handling of Google OAuth signin via react native, I''ve had to use a workaround to get Google signin working. Now that the skeleton is mostly built, I'll be implementing features throughout July and August until it's ready for deployment to my 20-30 weekly students.


Demo of current state (7/22/23):
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=XGPN6fIwT2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![Alt text](/assets/images/lmss-logo.png)](https://www.youtube.com/watch?v=XGPN6fIwT2A)
