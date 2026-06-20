const baseLinks = {
    up1: "https://pay.asegupag.com/checkout/cbfda751-c8a6-4923-ad2f-debad5a6551a", // Verifique
    up2: "https://pay.asegupag.com/checkout/e9c3bf99-97be-4c46-abc0-9d66cf1ac9f1", // Prossiga
    up3: "https://pay.asegupag.com/checkout/26051741-434a-4840-9e6e-f0df3e733cb3", // Cadastro
    up4: "https://pay.asegupag.com/checkout/2fbcb3cd-c52c-4e76-834f-381b764f8189", // Pendente
    up5: "https://pay.asegupag.com/checkout/2302c9cf-a702-4cd8-884b-58688b61685d", // Ativar Conta
    up6: "https://pay.asegupag.com/checkout/a95fc7ab-e748-43b3-a812-2c494e10cac0", // Registro
    up7: "https://pay.asegupag.com/checkout/b18fdae3-51d7-43ec-a4d9-727103df881a", // Acréscimo
    up8: "https://pay.asegupag.com/checkout/1758b759-cf72-4fe7-b30f-edc63235bd40", // Documento
    up9: "https://pay.asegupag.com/checkout/2d5c17d0-cf1f-4b64-a6f1-be1bcd20f740", // Aplicativo
    up10:"https://pay.asegupag.com/checkout/0c4a8fa5-ad56-4142-8400-747ab5607473", // Abertura
    up11:"https://pay.asegupag.com/checkout/8c17a153-23d5-4338-94ad-1f382b8446c2", // Consultoria
    up12:"https://pay.asegupag.com/checkout/7636d9dd-2193-4531-bfe4-96e9f9d447fa"  // Administrativo
};

function redirect(key) {
    try { 
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
