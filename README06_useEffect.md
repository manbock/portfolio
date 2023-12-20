
# useEffect

# useEffect(()=>{},[])

## useEffect(()=>{},[]) ==> 배열이 비어있을 경우에는 component가 실행될때 처음 한번만 실행된다.
![image](https://github.com/manbock/node.js/assets/145514177/8676a0fb-0916-43b3-9f45-1bf388c86e00)


## useEffect(()=>{},[products]) ==> products의 값이 바뀔때마다 useEffect가 실행됨(component가 실행될때 처음 한번 실행된 후.)
![image](https://github.com/manbock/node.js/assets/145514177/ab53213c-fe3a-4631-99eb-9f6b0be16c7e)


## useEffect(()=>{},[products, count]) ==> products와 count중에서 하나라도 값이 바뀔때마다 useEffect가 실행됨(component가 실행될때 처음 한번 실행된 후.)
