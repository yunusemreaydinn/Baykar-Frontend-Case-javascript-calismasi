const Welcome = ({ handleStart }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Test Şartları</h1>
            <ul className="mt-4 text-xl font-medium text-center">
                <li>Bu test toplam 10 sorudan oluşmaktadır.</li>
                <li>Her soru için 30 saniye süreniz vardır.</li>
                <li>İlk 10 saniye işaretleme yapılamaz.</li>
                <li>Süre sonunda cevap verilmese bile sonraki soruya geçilecektir.</li>
                <li>İşaretlenmiş fakat ileri butonuna tıklanmamış sorular geçerli sayılacaktır.</li>
                <li>Geçmiş sorulara dönülemez.</li>
                <li>Sonuçlara test bitiminde ulaşabilirsiniz.</li>
            </ul>
            <button
                className="px-4 py-2 mt-6 text-white bg-blue-500 rounded"
                onClick={handleStart}
            >
                Başla
            </button>
        </div>
    )
}

export default Welcome