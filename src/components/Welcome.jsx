const Welcome = ({ handleStart }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-neutral-50">
            <div className="flex flex-col gap-12 p-24 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center">Test Kuralları</h1>
                <ul className="flex flex-col gap-2 mx-6 mt-4 text-xl list-disc">
                    <li>Bu test toplam 10 sorudan oluşmaktadır.</li>
                    <li>Her soru için 30 saniye süreniz vardır.</li>
                    <li>İlk 10 saniye işaretleme yapılamaz.</li>
                    <li>Süre sonunda cevap verilmese bile sonraki soruya geçilecektir.</li>
                    <li>İşaretlenmiş fakat ileri butonuna tıklanmamış sorular geçerli sayılacaktır.</li>
                    <li>Geçmiş sorulara dönülemez.</li>
                    <li>Sonuçlara test bitiminde ulaşabilirsiniz.</li>
                </ul>

                <button
                    className="px-8 py-4 mt-6 text-xl font-semibold tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    onClick={handleStart}>
                    Teste Başla
                </button>

            </div>
        </div>
    )
}

export default Welcome