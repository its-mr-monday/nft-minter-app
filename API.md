><br>
>
># *NFT MINTER API DOCS*
>
>## Api Routes And Information
><br>
>
>>## *Login Route*
>> Route path: /api/login<br>
>>Expected data: json<br>
>>Example data:
>>>{<br>
>>>  "username": "foo",<br>
>>>  "password": "bar"<br>
>>>}<br>
>>>
>>Return types:<br>
>>>HTTP RESPONSE CODE 200 OK<br>
>>>>Returns "token" and response "message"<br>
>>
>>>HTTP RESPONSE CODE 401<br>
>>>>Returns error "message"
>>
>>>HTTP RESPONSE CODE 403<br>
>>>>Returns error "message"<br>
>>>
><br>
>
>>## *Logout Route*
>> Route path: /api/logout<br>
>>Expected data: json<br>
>>Example data:
>>>{<br>
>>>"token": token_string<br>
>>>}<br>
>>>
>>Return types:<br>
>>> HTTP RESPONSE CODE 200 OK<br>
>>>>Returns a succesful deletion of token "message"<br>
>>
>>>HTTP RESPONSE CODE 403<br>
>>>>Returns invalid token error "message"
>>>
><br>
