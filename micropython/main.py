"""
Created by: Mr. Coxall
Created on: Sept 2020
This is the "Hello, World!" module, with proper style
"""

from microbit import *

while True:
    display.show(Image.HEART)
    sleep(1000)
    display.scroll("Hello, World!")
