const qnaList = [
    {
        q: '1. 자신의 성격이 어떤 것에 가깝다고 생각하나요?',
        a: [
            {answer : 'a. 모든 것에 신중하지만 적극적이지 않다.', type:[0]},
            {answer : 'b. 침착하지만, 남에게 매정하다.', type:[2]},
            {answer : 'c. 다른사람들과 대화하는 것을 좋아하며, 잘 웃는다.', type:[3]},
            {answer : 'd. 까칠하며, 거짓말을 잘 못한다.', type:[1]}
        ]
    },
    {
        q: '2. 서로가 좋아하고 있는 상황입니다. 누가 먼저 고백을 하는게 좋을까요?',
        a: [
            {answer : 'a. 내가 먼저 고백을 할 것이다.', type:[1, 2]},
            {answer : 'b. 상대가 먼저 해줬으면 한다.', type:[0, 3]},
        ]
    },
    {
        q: '3. 여친 / 남친이랑 데이트 할 장소는 누가 정할까요?',
        a: [
            {answer : 'a. 내가 가고싶은대로 데이트 장소를 계획할 것이다', type:[0]},
            {answer : 'b. 상대가 가고싶을 곳으로 데이트 장소를 정한다.', type:[2]},
            {answer : 'c. 즉흥적으로 가고싶은 곳을 간다.', type:[3]},
        ]
    },
    {
        q: '4. 여친 / 남친이 다른 사람을 좋아하는거 같다. 어떻게 할까요?',
        a: [
            {answer : 'a. 무조건 헤어진다.', type:[3]},
            {answer : 'b. 대화로 풀어볼려고 노력한다.', type:[0]},
            {answer : 'c. 에이 설마... 라고 생각하고 넘어간다.', type:[2]},
            {answer : 'd. 나도 다른사람을 만나러 갈거다.', type:[1]}
        ]
    },
    {
        q: '5. 데이트 도중 자신의 이상형을 만나게 되었습니다 어떻게 할 것인가요?',
        a: [
            {answer : 'a. 이악물고 무시한다.', type:[0, 2]},
            {answer : 'b. 내 여친 / 남친이 더욱 더 중요하다.', type:[3, 2]},
            {answer : 'c. 한 두번 정도 힐끗 보고 만다.', type:[1, 3]},
            {answer : 'd. 그 사람과 대화를 시도한다.', type:[1]}
        ]
    },
    {
        q: '6. 여친 / 남친이 나에게 거짓말을 하는것 같습니다. 어떻게 할 것인가요?',
        a: [
            {answer : 'a. 거짓말 하지 말라고 화낸다.', type:[1]},
            {answer : 'b. 일부로 속은척 해준다.', type:[2]},
            {answer : 'c. 지금은 넘어가지만 속에 쌓아둔다.', type:[3]},
            {answer : 'd. 아무 생각이 없다.', type:[1]}
        ]
    },
    {
        q: '7. 여친 / 남친이 화가 났을때 어떻게 대처할 것인가요?',
        a: [
            {answer : 'a. 나도 많이 참았다고 역으로 화를 낼 것이다.', type:[0, 1]},
            {answer : 'b. 미안하다고 사과부터 한다.', type:[2]},
            {answer : 'c. 상황을 넘기게 웃길려고 한다.', type:[3]},
            {answer : 'd. 상황을 피한다.', type:[1]}
        ]
    },
    {
        q: '8. 여친 / 남친이 가장 사랑스러울 때는 언제인가요?',
        a: [
            {answer : 'a. 내 말에 공감을 잘해주는 여친 / 남친', type:[0]},
            {answer : 'b. 나를 웃길려고 열심히 노력하는 여친 / 남친', type:[1, 3]},
            {answer : 'c. 내 말을 잘 들어주고 날 응원하는 여친 / 남친', type:[2]},
            {answer : 'd. 나에게 솔직히 모든 것을 말해주는 여친 / 남친', type:[1]}
        ]
    },
    {
        q: '9. 여친 / 남친과 같이 가고싶은 곳은 무엇인가요?',
        a: [
            {answer : 'a. 같이 놀이기구 타면서 놀수있는 놀이공원을 간다.', type:[3]},
            {answer : 'b. 즐겁게 놀아야지 오락실을 간다.', type:[2]},
            {answer : 'c. 그냥 집에서 놀자.', type:[1]},
            {answer : 'd. 조용하게 행복하게 미술관 / 박물관.', type:[0]}
        ]
    },
    {
        q: '10. 헤어지자고 했을때 당신의 반응과 가장 가까운 것은 무엇인가요?',
        a: [
            {answer : 'a. 왜 헤어지냐고 붙잡는다.', type:[0]},
            {answer : 'b. 일단 이유부터 물어본다', type:[1, 3]},
            {answer : 'c. 바로 다른 사람을 찾는다.', type:[1, 2]},
            {answer : 'd. 방에서 계속 울 것이다.', type:[0, 1]}
        ]
    },
]

const infoList = [
    {
        name: '고독한 완벽주의 A형',
        desc: '소심하며, 먼저 다가가는 것보단 상대가 나에게 먼저 와줬으면 하는 성격을 가지고 있습니다. 또한 배려가 넘처나지만, 나중에 폭발하면 어떻게 될지 몰라요!'
    },
    {
        name: '까칠까칠 나만의 B형',
        desc: '다들 "예"할때 혼자 "아니요"가 가능한 혈액형과 성격입니다. 가끔 상대방에게 강력하게 표현하여, 곤란하게 할수도 있지만 B형도 마음이 여린 사람입니다.'
    },
    {
        name: '천재와 바보가 공존하는 AB형',
        desc: '천재가 있으면 바보도 있는 법! 둘중 하나밖에 없는 AB형은 연애할때 츤데레 같지만 쉽게 사랑에 빠지는 타입은 아니에요'
    },
    {
        name: '웃고 웃기만 하는 O형',
        desc: '매우 잘 웃는 O형! 한번 사랑에 빠지면 적극적으로 표현하고 오래가지만, 그들을 건들이면 무슨 일이 일어날지 몰라요!'
    },
]