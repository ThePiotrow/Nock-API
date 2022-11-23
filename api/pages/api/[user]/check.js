export default async function handler (req, res){
    const data = await fetch(`http://localhost:3001/viewers/${req.query.user}`)
    let {id, count} = await data.json();
    if (!id) {
        ({id, count} = {id :req.query.user, count : 0});
        await fetch(`http://localhost:3001/viewers`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({id, count})
        })
    }
    return res.status(200).json(count);
}