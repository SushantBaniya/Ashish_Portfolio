export function downloadCV() {
    const cvText = [
        "AVL Technician CV",
        "Name: Ashish B.K.",
        "Role: Audio • Video • Lighting Technician",
        "Summary: Reliable AVL tech with 8+ years delivering FOH/Monitors, IMAG, lighting cues, RF coordination, and Dante routing.",
        "Note: Replace this generated file with your actual PDF in /public and update the link if needed.",
    ].join("\n\n");

    // Generate a simple downloadable file with .pdf extension.
    // For a real CV, place an actual PDF in /public and link to it instead.
    const blob = new Blob([cvText], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ashish_AVL_Technician_CV.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}
