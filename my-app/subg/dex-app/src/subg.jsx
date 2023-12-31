import { useState, useEffect } from 'react'
import {createClient} from "urql"
import './App.css'

function App() {
  const [swappedToEths, setTokens] = useState([]);
  const QueryURL = "https://api.studio.thegraph.com/query/55877/dexapp/version/latest"
  const query = `{
    swappedToEths(first: 5) {
      id
      tokensToSwap
      transactionHash
    }
    ethSwappeds(first: 5) {
      id
      tokensToReceive
      transactionHash
    }
  }`

  const client = createClient({
    url:QueryURL
  })

  useEffect(() => {
    const getTokens = async () => {
      const { data } = await client.query(query).toPromise();
      console.log(data);
      setTokens(data.swappedToEths);
    }
    getTokens();
  }, [])
  return (
    <>
      <div>
        <table class="tab">
        <th>Token Info</th>{
          swappedToEths!==null && swappedToEths.length>0 && swappedToEths.map((swappedToEths)=>{
              return(
                <div><br></br>
                  <tr>ID:<div>{swappedToEths.id}</div></tr>
                  <br></br><tr>TokensToSwap:<div>{swappedToEths.tokensToSwap}</div></tr>
                  <br></br><tr>Hash:<div>{swappedToEths.transactionHash}</div></tr>
                </div>
              )
          })
        }
        </table>
      </div>
      
    </>
  )
}

export default App
