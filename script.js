// جلب عناصر التحكم من الصفحة
const textInput = document.getElementById('text-input');
const textToSpeechButton = document.getElementById('text-to-speech');
const textToImageButton = document.getElementById('text-to-image');
const outputDiv = document.getElementById('output');

// تحويل النص إلى صوت باستخدام Web Speech API
textToSpeechButton.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    } else {
        alert("يرجى إدخال نص للتحويل إلى صوت.");
    }
});

// تحويل النص إلى صورة باستخدام واجهة API (مثال باستخدام Lorem Picsum)
textToImageButton.addEventListener('click', async () => {
    const text = textInput.value;
    if (text) {
        try {
            // مثال لطلب صورة عشوائية (يمكن تعديلها لاستدعاء API خاص)
            const response = await fetch('https://picsum.photos/200/300');
            const blob = await response.blob();
            const imageURL = URL.createObjectURL(blob);

            // عرض الصورة
            outputDiv.innerHTML = `<img src="${imageURL}" alt="Generated Image" class="img-fluid mt-3">`;
        } catch (error) {
            console.error("حدث خطأ أثناء توليد الصورة:", error);
        }
    } else {
        alert("يرجى إدخال نص للتحويل إلى صورة.");
    }
});
