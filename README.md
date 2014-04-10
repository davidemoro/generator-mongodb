# generator-mongodb [![Build Status](https://secure.travis-ci.org/davidemoro/generator-mongodb.png?branch=master)](https://travis-ci.org/davidemoro/generator-mongodb)

> [Yeoman](http://yeoman.io) generator


This is a weekend/night hack just to dive into yeoman: an interactive installer for MongoDB. This code is not battle tested, it won't be maintained by me and it requires much love supporting additional install info (pinning of versions, support more install options, etc).

It is internally based on the buildout system. I'm not suggesting to adopt buildout in js development, I've just used it because it already exists a ready to be used plenty-of-options buildout recipe for installing MongoDB. So that seemed for me the quickest and easier way to reach this goal.

See more information and the install instructions on [Yeoman generator-mongodb interactive installer](http://davidemoro.blogspot.com/2014/04/yeoman-generator-mongodb-installer.html) blog post.


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-mongodb from npm, run:

```
$ npm install -g generator-mongodb
```

Finally, initiate the generator:

```
$ yo mongodb
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
