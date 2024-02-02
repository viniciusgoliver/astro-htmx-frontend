export async function GET({ request }) {
  const cep = new URL(request.url).searchParams.get("cep");

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
    (res) => res.json()
  );

  const html = `<div class="bg-white rounded-lg shadow-md p-8">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Detalhes do Endereço</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <p class="text-lg font-semibold mb-2 text-gray-700">CEP:</p>
            <p class="text-lg mb-4 text-gray-900">${response.cep}</p>
        </div>
        <div>
            <p class="text-lg font-semibold mb-2 text-gray-700">Logradouro:</p>
            <p class="text-lg mb-4 text-gray-900">${response.logradouro}</p>
        </div>
        <div>
            <p class="text-lg font-semibold mb-2 text-gray-700">Bairro:</p>
            <p class="text-lg mb-4 text-gray-900">${response.bairro}</p>
        </div>
        <div>
            <p class="text-lg font-semibold mb-2 text-gray-700">Cidade:</p>
            <p class="text-lg mb-4 text-gray-900">${response.localidade}</p>
        </div>
        <div>
            <p class="text-lg font-semibold mb-2 text-gray-700">Estado:</p>
            <p class="text-lg mb-4 text-gray-900">${response.uf}</p>
        </div>
    </div>
</div>
`;

  return new Response(html);
}
