# React Datatable.

A datatable with pagination, search and sort.

## Install

<pre>npm install</pre>

## Datatable

Import as any component

<pre>import {Datatable} from 'lib'</pre>

You have to pass your data to employees prop :

<pre>&lt;Datatable employees={myData}/&gt;</code></pre>

By default pagination is active. You can however display whole table by adding a scrollY prop and set the height of the scroll area :

<pre>&lt;Datatable employee={myData} scrollY={300}/&gt;</pre>

### Docs

See docs <a href="">here</a>
