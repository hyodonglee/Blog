---
slug: "/category/algorithm/programmers/60058"
date: "2021-02-07"
title: "[Programmers] 60058. 괄호 변환"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "programmers", "recursive", "simulation", "dfs"]
description: "dfs의 핵심 원리인 재귀를 이용하여 괄호를 변환하여 올바른 문자열을 만드는 문제이다."
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
//programmers_60058_괄호변환

import java.io.*;
import java.lang.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println(solution(br.readLine()).toString());
    }
    public static StringBuilder solution(String p) {
        StringBuilder answer = new StringBuilder("");
        if(p.equals("")) return new StringBuilder(p);

        int left=0, right=0;
        StringBuilder sb = new StringBuilder(p);
        StringBuilder u = new StringBuilder("");
        StringBuilder v = new StringBuilder("");

        for(int i=0;i<sb.length();i++){
            if(sb.charAt(i)=='(') left++;
            else right++;

            if(left==right){
                u.append(sb.substring(0, i+1));
                v.append(sb.substring(i+1));
                break;
            }
        }

        //u가 뭐든간에 어쨌든 v는 solution과정을 재귀적으로 실행해주어야한다
        if(!v.toString().equals("")) v=solution(v.toString());

        if(isCorrect(u)){
            answer.append(u);
            answer.append(v);
            return answer;
        }

        answer.append("(");
        answer.append(v);
        answer.append(")");
        u.deleteCharAt(0);
        u.deleteCharAt(u.length()-1);

        for(int i=0;i<u.length();i++){
            if(u.charAt(i)=='(') answer.append(')');
            else answer.append('(');
        }

        return answer;
    }

    public static boolean isCorrect(StringBuilder s){
        return s.charAt(0)=='('&&s.charAt(s.length()-1)==')';
    }
}


```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/107145490-37a41880-6985-11eb-9c69-05dc45fd6a57.png)
<br><br>

#### [느낀점]
풀면서 막막했는데 난이도가 낮은 문제여서 너무 겁을 먹은 느낌이 들었다. 문자열이라고 다 복잡하고 구현하기 힘든 게 아니라 원리만 이해하면 쉽게 풀 수 있다는 것을 알 수 있었다.