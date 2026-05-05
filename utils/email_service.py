import smtplib
from email.mime.text import MIMEText

def send_email(to_email, student_name):
    sender_email = "your_email@gmail.com"
    sender_password = "your_app_password"  # Gmail App Password use karo

    subject = "Low Attendance Alert"
    body = f"Dear {student_name},\n\nYour attendance is below the required limit. Please improve it.\n\nRegards,\nCollege Admin"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = to_email

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        print("Email Sent ✅")
    except Exception as e:
        print("Error:", e)
