from utils.email_service import send_email

def check_and_alert(name, email, attendance_percent):
    if attendance_percent < 75:
        send_email(email, name)
