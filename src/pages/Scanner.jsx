import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function Scanner() {
  const [scanResult, setScanResult] = useState();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error() {
      console.warn(error);
    }
  }, []);

  return (
    <div className="p-64 w-full flex justify-center items-center flex-col ">
      <h1>Scanner</h1>
      <div id="reader" className="p-48">
        {scanResult ? (
          <div>
            Success: <a href={scanResult}></a>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </div>
  );
}

export default Scanner;
