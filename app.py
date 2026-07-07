from qr_scanner import scan_qr
from attendance import mark_attendance

@app.route("/qr_attendance")
def qr_attendance():
    student_name = scan_qr()

    if student_name:
        mark_attendance(student_name)
        return {"status": f"{student_name} Attendance Marked ✅"}

    return {"status": "QR Failed ❌"}
    from flask import Flask
from qr_scanner import scan_qr
from attendance import mark_attendance

app = Flask(__name__)

@app.route("/")
def home():
    return "AI Attendance System Running"

@app.route("/qr_attendance")
def qr_attendance():
    student_name = scan_qr()

    if student_name:
        mark_attendance(student_name)
        return {"status": f"{student_name} Attendance Marked"}

    return {"status": "QR Failed"}

if __name__ == "__main__":
    app.run(debug=True)
