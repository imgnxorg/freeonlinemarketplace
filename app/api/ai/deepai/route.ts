export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);

    // Example posting a image URL:
    (async function () {
        const resp = await fetch(
            "https://api.deepai.org/api/background-remover",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.DEEPAI_API_KEY || "",
                },
                body: JSON.stringify({
                    image: "YOUR_IMAGE_URL",
                }),
            },
        );

        const data = await resp.json();
        console.log(data);
    })();

    // return new Response('Hello from Next.js API route!', {
    //   status: 200,
    // });
}
