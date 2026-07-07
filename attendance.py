from utils.email_service import send_email

def check_and_alert(name, email, attendance_percent):
    if attendance_percent < 75:
        send_email(email, name)
        import csv
import os
from datetime import datetime

FILE_NAME = "attendance.csv"

def mark_attendance(student_name):
    file_exists = os.path.isfile(FILE_NAME)

    with open(FILE_NAME, "a", newline="") as file:
        writer = csv.writer(file)

        if not file_exists:
            writer.writerow(["Name", "Date", "Time"])

        now = datetime.now()

        writer.writerow([
            student_name,
            now.strftime("%d-%m-%Y"),
            now.strftime("%H:%M:%S")
        ])

    return True
