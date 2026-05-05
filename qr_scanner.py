import cv2
from pyzbar.pyzbar import decode

def scan_qr():
    cap = cv2.VideoCapture(0)

    while True:
        success, frame = cap.read()

        for barcode in decode(frame):
            qr_data = barcode.data.decode('utf-8')
            print("QR Detected:", qr_data)
            cap.release()
            cv2.destroyAllWindows()
            return qr_data

        cv2.imshow("QR Scanner", frame)

        if cv2.waitKey(1) == 27:
            break

    cap.release()
    cv2.destroyAllWindows()
