# Observer Pattern 학습 예제
Observer Pattern을 학습하고 이해하기 위해 [Code Sandbox](https://codesandbox.io/s/optimistic-wing-y0xqu)의 예시코드를 분석 및 재 구현

## 구현 사항

옵저버패턴을 사용하여 아래 그림과 같은 Work Flow로 구현.

![Observer_Pattern](https://user-images.githubusercontent.com/37759759/78526894-678b0880-7816-11ea-8fe6-e1c8e4862179.jpg)

1. Observer를 add, remove, notify하는 `Subject` 클래스 생성
   - `Subject` 클래스는 observer를 저장하는 배열과 추가(addObserver), 제거(removeObserver) 그리고 state 변경을 모든 observer에 전달(notify)하는 프로퍼티 및 메서드를 소유.
2. `State` 클래스는 `Subject` 클래스를 상송하여 State가 변경(update)될 때 `Subject`의 `notify`메서드를 실행하여 state 변경을 각 observer에 전달
3. `Observer` 클래스는 단순히 빈 `update` 메서드만을 갖고 있어 **View**를 담당하는 각 **컴포넌트들** (`List`, `Count`)이 상속하여 Observer로 만들어주기 위해 존재. 
   - 이를통해 동일한 `update` 메서드를 사용해 새롭게 View를 그리도록 유도하여 Subject의 `notify` 메서드에서 모든 옵저버들의 `update` 메서드를 실행시킬 수 있음.
4. `Form` 컴포넌트는 실제로 **Controll**에 해당하는 역할을 담당하여 유저 입력에 따라 state를 변경하도록 지시
  - `Form`에서는 `State` 클래스의 인스턴스를 constructor의 인자로 받아 이벤트를 제어하는 메서드를 통해 이를 변경.


## 일반적인 옵저버 패턴의 구현 Flow
![Observer_Pattern_common](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/1281px-Observer.svg.png)

## 참조 (Reference)
[Code Sandbox](https://codesandbox.io/s/optimistic-wing-y0xqu)