import qrcode

def generate_qr(student_name):
    data = student_name  # simple id

    qr = qrcode.make(data)
    qr.save(f"{student_name}.png")

# Example
generate_qr("Student1")
