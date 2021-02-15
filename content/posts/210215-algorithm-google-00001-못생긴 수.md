---
slug: "/category/algorithm/google/1"
date: "2021-02-15"
title: "[Google] 못생긴 수"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "google", "dp" ]
description: "dp를 이용하여 못생긴 수를 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- 다이나믹 프로그래밍


<br><br>

#### [문제링크]
- 링크없음

못생긴 수란 오직 2, 3, 5만을 소인수로 가지는 수를 의미합니다. 다시 말해 오직 2, 3, 5를 약수로 가지는 합성수를 의미합니다. 1은 못생긴 수라고 가정합니다. 따라서 못생긴 수들을 {1, 2, 3, 4, 5 , 6, 8, 9, 10, 12, 15, ...} 순으로 이어지게 됩니다. 이때, n번째 못생긴 수를 찾는 프로그램을 작성하세요. 예를 들어 11번째 못생긴 수는 15입니다.
<br><br>


#### [요구사항]

1. n번째 못생긴 수를 찾아야한다.<br><br> 


#### [풀이]

1. dp를 이용하여 2,3,5를 가장 작은 못생긴 수에 곱해주는 방식으로 구한다.<br><br>

2. 가장 작은 못생긴 수를 구하기 위해서는 마지막으로 2, 3, 5를 곱했던 수들에 대한 index가 저장되어 있어야 하기 때문에 i2, i3, i5라는 index 3개를 이용하여 dp를 구현한다.
<br><br>

#### [코드]
```java
//Google_못생긴수

import java.io.*;
import java.lang.*;
public class Main {
    static int n;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());

        int dp[] = new int[n];

        dp[0]=1;
        int i2=0, i3=0, i5=0;
        int next2 = 2, next3 = 3, next5 = 5;

        for(int i=1;i<n;i++){
            dp[i]=Math.min(next2, next3);
            dp[i]=Math.min(dp[i], next5);

            if(dp[i]==next2){
                i2++;
                next2 = dp[i2]*2;
            }
            if(dp[i]==next3){
                i3++;
                next3=dp[i3]*3;
            }
            if(dp[i]==next5){
                i5++;
                next5=dp[i5]*5;
            }
        }
        System.out.println(dp[n-1]);
    }
}

```
<br><br>

#### [통과여부]
- 없음


<br><br>

#### [느낀점]
알고리즘 사이트에 있는 문제는 아니고 책에 있는 문제였는데 인상깊었다. 단순 점화식으로 생각하는게 아니라 좀 더 폭넓게 생각하는 계기가 되었다.