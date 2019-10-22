## getStreak: **Function**

- gets the streak object
- if task does not exists, create one =>
  ```
  {
    value: 0,
    lastUpdate: null
  }
  ```
- if task exist:
  - if today is two days+ after the date saved in `streak.lastUpdate`, reset the streak

## updateStreak: **Function**

- gets the streak object
- compare today and the date in `streak.lastUpdate`:
  - if they are equal, do nothing
  - if they are not, increment by one and update `streak.lastUpdate` to today date

```
today: 23.10
streak {
  value: 2,
  lastUpdate: 21.10
}
```

// TODO: first day streak
