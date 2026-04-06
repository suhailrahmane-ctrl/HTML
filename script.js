// لیست فرضی از مدل‌های موبایل برای جستجو
const mobileList = [
    { id: 1, name: "Samsung Galaxy S23", brand: "Samsung" },
    { id: 2, name: "iPhone 14 Pro", brand: "Apple" },
    { id: 3, name: "Google Pixel 7", brand: "Google" },
    { id: 4, name: "OnePlus 11", brand: "OnePlus" },
    { id: 5, name: "Xiaomi 13 Pro", brand: "Xiaomi" },
    { id: 6, name: "Samsung Galaxy A54", brand: "Samsung" },
    { id: 7, name: "iPhone 14", brand: "Apple" },
    { id: 8, name: "Google Pixel 7a", brand: "Google" },
    { id: 9, name: "Honor Magic 5 Pro", brand: "Honor" },
    { id: 10, name: "Samsung Galaxy Z Fold 5", brand: "Samsung" }
];

function searchMobile() {
    // دریافت مقدار ورودی از فیلد جستجو
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    // دریافت عنصری که نتایج در آن نمایش داده می‌شوند
    const resultsDiv = document.getElementById('results');

    // پاک کردن نتایج قبلی
    resultsDiv.innerHTML = '';

    // فیلتر کردن لیست موبایل‌ها بر اساس ورودی جستجو
    const filteredMobiles = mobileList.filter(mobile =>
        mobile.name.toLowerCase().includes(searchInput) ||
        mobile.brand.toLowerCase().includes(searchInput)
    );

    // نمایش نتایج
    if (filteredMobiles.length > 0) {
        filteredMobiles.forEach(mobile => {
            const resultElement = document.createElement('p');
            resultElement.textContent = `${mobile.brand} - ${mobile.name}`;
            resultsDiv.appendChild(resultElement);
        });
    } else {
        // اگر نتیجه‌ای یافت نشد
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = "موبایل مورد نظر یافت نشد.";
        noResultsElement.classList.add('no-results'); // اضافه کردن کلاس برای استایل‌دهی
        resultsDiv.appendChild(noResultsElement);
    }
}

// نکته: اگر می‌خواهید جستجو با تایپ کردن هم انجام شود (بدون نیاز به کلیک دکمه)،
// می‌توانید یک event listener به input اضافه کنید:
// document.getElementById('searchInput').addEventListener('keyup', searchMobile);
// اما برای شروع، استفاده از دکمه کافی است.
```
