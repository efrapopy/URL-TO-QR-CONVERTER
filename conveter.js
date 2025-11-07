import QRCode from "qrcode";
import readline from "readline";

// Buat interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Tanya user link
rl.question("🔗 Masukkan link yang ingin diubah ke QR: ", (link) => {
  if (!link) {
    console.log("⚠️  Link tidak boleh kosong!");
    rl.close();
    return;
  }

  const fileName = "qrcode.png";

  // Generate QR code ke file PNG
  QRCode.toFile(fileName, link, { width: 400 }, (err) => {
    if (err) {
      console.error("❌ Gagal membuat QR code:", err);
    } else {
      console.log("✅ QR code berhasil dibuat!");
      console.log(`📁 Disimpan sebagai: ${fileName}`);
      console.log(`🔗 Untuk link: ${link}`);
    }
    rl.close();
  });
});
