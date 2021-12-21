---
slug: "/category/algorithm/baekjoon/10828"
date: "2021-12-21"
title: "[BOJ] 10828. 스택"
author: "이효동"
categories: ["algorithm"]
tags: ["algorithm" , "baekjoon", "stack" ]
description: "빙산이 다 녹거나 두 개로 나눠질 때까지의 시간을 구하는 문제이다."
authorImg: "https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
---


#### [분류]
- stack
<br><br>

#### [문제링크]
- https://www.acmicpc.net/problem/10828
<br><br>


#### [요구사항]
- 스택을 구현하는 기초적인 문제이다.<br><br> 

#### [풀이]

1. 스택의 push, pop, size, empty, top을 구현한다.<br><br>


#### [코드]
```kotlin
//BOJ_10828_스택
val stack = initStack()
var top = -1
fun main(args: Array<String>) {
    val sb = StringBuilder()
    val n = readLine()!!.toInt()

    (0 until n).forEach {
        val orders = readLine()
        val order = orders?.split(" ")

        when (order?.get(0)) {
            "push" -> {
                push(order[1].toInt())
            }
            "pop" -> {
                sb.append("${pop()}\n")
            }
            "size" -> {
                sb.append("${size()}\n")
            }
            "empty" -> {
                sb.append("${empty()}\n")
            }
            "top" -> {
                sb.append("${top()}\n")
            }
            else -> {
                // nothing
            }
        }
    }
    println(sb)
}

// function
fun initStack(): ArrayList<Int> {
    return ArrayList()
}

fun push(x: Int) {
    stack.add(x)
    top++
}

fun pop(): Int {
    if (top > -1) {
        return stack.removeLast().let {
            top--
            it
        }
    }
    return -1
}

fun empty(): Int {
    if (top == -1) return 1
    return 0
}

fun size(): Int {
    return top + 1
}

fun top(): Int {
    if (top == -1) return -1
    return stack[top]
}
```
<br><br>

#### [통과여부]
![image](https://user-images.githubusercontent.com/54053016/146875443-07024a4e-edcd-4fcb-b7ea-72957da9e4e5.png)

<br><br>

#### [느낀점]
부스트캠프에서 익힌 kotlin으로 알고리즘 문제를 풀어보니 새로웠다.