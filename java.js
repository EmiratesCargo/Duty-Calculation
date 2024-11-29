function calculateDuty() {
    // Get input values
    const hsCode = document.getElementById("hsCode").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
    const netWeight = parseFloat(document.getElementById("netWeight").value);
    const palRate = parseFloat(document.getElementById("palRate").value);
    const cessForValueRate = parseFloat(document.getElementById("cessForValueRate").value);
    const cessForWeightRate = parseFloat(document.getElementById("cessForWeightRate").value);
    const sslRate = parseFloat(document.getElementById("sslRate").value);
    const vatRate = parseFloat(document.getElementById("vatRate").value);

    // Format HS Code to 8 digits
    const fullHSCode = formatHSCode(hsCode);

    // Calculate CIF value
    const v = amount * exchangeRate;

    // Calculate Duties
    const dutyForValue = v * 0.05;  // Example rate for Duty for Value
    const dutyForWeight = netWeight * 0.05;  // Example rate for Duty for Weight
    const pal = v * palRate;
    const cessForValue = v * cessForValueRate;
    const cessForWeight = netWeight * cessForWeightRate;
    const ssl = v * sslRate;
    const vat = (v + dutyForValue + cessForValue + pal) * vatRate;
    const totalDuty = dutyForValue + dutyForWeight + pal + cessForValue + cessForWeight + ssl + vat;

    // Display results
    document.getElementById("hsCodeResult").innerText = fullHSCode;
    document.getElementById("dutyForValue").innerText = formatNumber(dutyForValue);
    document.getElementById("dutyForWeight").innerText = formatNumber(dutyForWeight);
    document.getElementById("pal").innerText = formatNumber(pal);
    document.getElementById("cessForValue").innerText = formatNumber(cessForValue);
    document.getElementById("cessForWeight").innerText = formatNumber(cessForWeight);
    document.getElementById("ssl").innerText = formatNumber(ssl);
    document.getElementById("vat").innerText = formatNumber(vat);
    document.getElementById("totalDuty").innerText = formatNumber(totalDuty);
}

// Function to format HS Code to 8 digits
function formatHSCode(hsCode) {
    let code = hsCode;
    if (code.length === 4) {
        code = `${code}.00.00`;
    } else if (code.length === 6) {
        code = `${code}.00`;
    }
    return code;
}

// Function to format numbers with commas
function formatNumber(number) {
    return number.toLocaleString();
}
