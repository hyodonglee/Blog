---
slug: "/category/algorithm/baekjoon/14888"
date: "2021-02-08"
title: "[BOJ] 14888. 연산자 끼워 넣기"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "recursive", "samsung", "simulation", "dfs"]
description: "진행중"
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 탐색
- 시뮬레이션
- 재귀


<br><br>

#### [문제링크]
- https://programmers.co.kr/learn/courses/30/lessons/60058
<br><br>


#### [요구사항]

1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.<br><br> 
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.<br><br> 
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.<br>
  3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.<br><br> 
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.<br> 
  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. <br>
  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.<br> 
  4-3. ')'를 다시 붙입니다.<br> 
  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.<br> 
  4-5. 생성된 문자열을 반환합니다.<br><br>

<br>
문제에서 하라는 그대로 문자열을 새롭게 구현하면 된다.

<br>


<br><br>

#### [풀이]

1. 빈 문자열이면 그대로 출력한다.

2. v에 대해서 재귀적으로 solution 함수를 수행해준다.

3. solution이 수행된 v와 u를 가지고 검사를 하고, 조건에 맞게 합치고 출력한다.

<br><br>

#### [코드]
```java

```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107145490-37a41880-6985-11eb-9c69-05dc45fd6a57.png)
<br><br>

#### [느낀점]
풀면서 막막했는데 난이도가 낮은 문제여서 너무 겁을 먹은 느낌이 들었다. 문자열이라고 다 복잡하고 구현하기 힘든 게 아니라 원리만 이해하면 쉽게 풀 수 있다는 것을 알 수 있었다.