class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hello, my name is", self.name)

p = Person("Alice")
p.greet()
