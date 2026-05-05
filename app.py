from qr_scanner import scan_qr
from attendance import mark_attendance

@app.route("/qr_attendance")
def qr_attendance():
    student_name = scan_qr()

    if student_name:
        mark_attendance(student_name)
        return {"status": f"{student_name} Attendance Marked ✅"}

    return {"status": "QR Failed ❌"}
