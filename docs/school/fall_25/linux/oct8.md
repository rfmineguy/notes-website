# Oct 8
## Shell Scripting
```bash
#!/usr/bin/env bash

function usage() {
  echo "usage: prog <args>"
  echo " -h;--help          print this help message"
}
```

## Concat
```bash
#!/usr/bin/env bash

x="Linux"
y=" vs "
echo "$x$y"
z=$x+$y
echo "$z"
```

## Substr
```bash
#!/usr/bin/env bash

x="First third fifth"
sub=${x:6:5}          # start:6, length: 5
echo "$sub"
```

## Math
```bash
#!/usr/bin/env bash

read x
read y
echo "$(($x + $y))"
```

## Function
```bash
#!/usr/bin/env bash

function func() {
  echo 'bash programming'
}

function func2() {
  echo "$1"
}

function area_rect() {
  area=$(($1 * $2))
  echo "Area: $area"
}

func
func2 3
```

## Return
```bash
#!/usr/bin/env bash
function greeting() {
  str="Hello, $name"
  echo $str
}

echo "Enter your name"
read name

val=$(greeting)
echo "$val"


function f4() {
  return 35
}

val=$(f4)
echo "$val"
```

## Directory Exists
```bash

if [ -d "somedir" ]; then
  echo "exists"
fi
```

## Read File
```bash

file='book.txt'
while read line; do
  echo $line
done < $file
```
- redirects file into the read command

## Append File
```bash
cat book.txt
echo "Learning linux" >> book.txt
cat book.txt
```

## File Exists
```bash
if [ -f "$filename" ]; then
  echo "$filename exists"
else
  echo "$filename does not exist"
fi
```

## Date
```bash
Year=`date +%Y`
Month=`date +%m`
Day=`date +%d`
Hour=`date +%H`
Minute=`date +%M`
Second=`date +%S`
```

## Wait
```bash
echo "Wait command" &
process_id=$!
wait $process_id
echo "Exited with code $?"
```

## Sleep
```bash
echo "Wait 5 seconds"
sleep 5
echo "Done"
```

## Translate
```bash
cat words.txt | tr "[a-z]" "[A-Z]"
echo "Id number 8675" | tr -d "[:digit:]"
````


## Secret
```bash
echo "Enter a message"
read message

secret=$(echo "$message" | tr "[A-Za-z]" "[D-ZA-Cd-za-c]")
echo "shifted 3 => $secret"
read -p "Press a key"

unsecret=$(echo "$secret" | tr "[D-ZA-Cd-za-c]" "[A-Za-z]"
echo "unshifted 3 =? $unsecret"
```

## Encryption
- an algorithm that scrambles a file based on a key, and can unscramble the scrambled file with the key
- happens on the binary of a file
- the amount of 0s and 1s should be 50/50 (unbiased)

## Caeser Cipher
- substituion cipher which replaces a letter with another that is a fixed distance away from it in the alphabet
- 'key' is the shift direction and stride
- 13 is a key that goes both ways without inverting sign or doing (26 - 13)

