---
slug: "/category/algorithm/baekjoon/16916"
date: "2021-06-26"
title: "[BOJ] 16916. 부분 문자열"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "kmp", "string" ]
description: "KMP 알고리즘을 이용하여 부분문자열 포함여부를 구한다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- KMP
- 문자열
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/16916
<br><br>


#### [요구사항]
- 문자열 S에 대해 부분문자열 P가 포함되어있는지 여부를 확인한다.<br><br> 

#### [풀이]

1. KMP알고리즘의 전형적인 문제이다.<br><br>

2. 우선은 부분이 되는 문자열 P에 대해서 table을 구한다. 이 table은 prefix와 suffix가 얼마나 겹치는지 구한다.<br><br>

3. table을 기준으로 문자열 S에 대해서 P를 비교해 가면서 건너뛰면서 구한다.<br><br>

4. 결과를 출력한다.<br><br>


#### [코드]
```java
//BOJ_16916_부분문자열

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        char[] S = br.readLine().toCharArray();
        char[] P = br.readLine().toCharArray();

        KMP(S, P);
    }

    public static int[] getTable(char[] P){
        int table[] = new int[P.length+1];
        int j=0;

        for(int i=1;i<P.length;i++){
            while(j>0 && P[i]!=P[j]){
                j = table[j-1];
            }
            if(P[i]==P[j]) table[i] = ++j;
        }
        return table;
    }

    public static void KMP(char[] S, char[] P){
        int table[] = getTable(P);
        int j=0;
        for(int i=0;i<S.length;i++){
            while(j>0 && S[i]!=P[j]){
                j = table[j-1];
            }
            if(S[i]==P[j]){
                if(j==P.length-1){
                    System.out.println(1);
                    return;
                }else{
                    j++;
                }
            }
        }
        System.out.println(0);
    }
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/124606301-b73c0200-dea7-11eb-8a3a-5252861375f5.png)
<br><br>

#### [느낀점]
KMP 알고리즘을 처음 알아서 너무 어려웠고 솔직히 아직 잘 이해가 안간다..