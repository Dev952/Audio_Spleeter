function upload() {
    var fileInput = document.getElementById('musicFile');
    var uploadStatus = document.getElementById('uploadStatus');

    if (fileInput.files.length > 0) {
        var fileName = fileInput.files[0].name;

        // Add your file splitting logic here
        // For demonstration, let's assume the file is split into two parts
        var part1Name = fileName + 'Instrumental';
        var part2Name = fileName + 'Vocal';

        // Example: Display split files status
        uploadStatus.innerHTML = `
            <p>File "${fileName}" successfully split into:</p>
            <ul>
                <li>${part1Name}</li>
                <li>${part2Name}</li>
            </ul>`;
    } else {
        uploadStatus.innerHTML = '<p>Please select a file to upload.</p>';
    }
}
